using AutoMapper;
using BookStore.API.Data;
using BookStore.API.DTOs;

namespace BookStore.API.Helpers
{
    public class MappingProfiles:Profile
    {
        public MappingProfiles()
        {
            // reversemap maps data either ways 
            CreateMap<Books, BookModel>().ReverseMap();
        }
    }
}
