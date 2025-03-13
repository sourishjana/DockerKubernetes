using BookStore.API.DTOs;
using Microsoft.AspNetCore.JsonPatch;

namespace BookStore.API.Repository
{
    public interface IBookRepository
    {
        Task<IList<BookModel>> GetALlBooksAsync();
        Task<BookModel> GetBookByIdAsync(int bookId);
        Task<BookModel> AddBookAsync(BookModel bookModel);
        Task UpdateBookAsync(int id, BookModel bookModel);
        Task UpdateBookPatchAsync(int bookId, JsonPatchDocument bookModel);
        Task DeleteBookAsync(int bookId);
    }
}
