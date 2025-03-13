using AutoMapper;
using BookStore.API.Data;
using BookStore.API.DTOs;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;

namespace BookStore.API.Repository
{
    public class BookRepository: IBookRepository
    {
        private readonly BookStoreContext _context;
        private readonly IMapper _mapper;

        public BookRepository(BookStoreContext context,IMapper mapper)
        {
            this._context = context;
            this._mapper = mapper;
        }

        public async Task<IList<BookModel>> GetALlBooksAsync()
        {
            var records = await _context.Books.ToListAsync();
            return _mapper.Map<IList<BookModel>>(records);
        }

        public async Task<BookModel> GetBookByIdAsync(int bookId)
        {
            var record = await _context.Books.FirstOrDefaultAsync(x=>x.Id==bookId);
            return _mapper.Map<BookModel>(record);
        }

        public async Task<BookModel> AddBookAsync(BookModel bookModel)
        {
            var book = new Books()
            {
                Title = bookModel.Title,
                Description = bookModel.Description
            };
            _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();
            return _mapper.Map<BookModel>(book);
        }

        public async Task UpdateBookAsync(int id,BookModel bookModel)
        {
            /*var recordBook=await _context.Books.FirstOrDefaultAsync(x=>x.Id==id);
            if (recordBook == null) return null;
            recordBook.Title = bookModel.Title;
            recordBook.Description = bookModel.Description;
            await _context.SaveChangesAsync();
            return new BookModel()
            {
                Id = recordBook.Id,
                Title = recordBook.Title,
                Description = recordBook.Description
            };*/
            var book = new Books()
            {
                Id = id,
                Title = bookModel.Title,
                Description = bookModel.Description
            };
            _context.Books.Update(book);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateBookPatchAsync(int bookId,JsonPatchDocument bookModel)
        {
            var book=await _context.Books.FindAsync(bookId);
            if (book != null)
            {
                bookModel.ApplyTo(book);
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteBookAsync(int bookId)
        {
            var book = new Books() { Id = bookId };
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
        }
    }
}
