using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {
        //create a constructor with dbconntextoptons as parameter
        public DataContext(DbContextOptions options):base(options){
        }

        public DbSet<Value> Value { get; set; }
    }
}