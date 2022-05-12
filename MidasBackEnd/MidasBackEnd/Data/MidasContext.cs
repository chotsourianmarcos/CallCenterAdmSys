using Entities;
using Entities.PersonItems;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace Data
{
    public class MidasContext : DbContext
    {
        public MidasContext() : base("name = MidasContext") { }
        public virtual DbSet<ClientItem> Clients { get; set; }
        public virtual DbSet<PersonItem> People { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonItem>()
                .ToTable("t_person");
                //despues ver tema adress y como hacerlo FK y eso y cómo ingresarlo.
                //.HasRequired<AdressItem>(a => a.Adress);
            //esperar a EF 6.0, que no es compatible con este ASP.NET 3.1
            //.HasDiscriminator<string>("Rol")
            //.HasValue<ClientItem>("Cliente");
            modelBuilder.Entity<ClientItem>()
                .ToTable("t_client");
            modelBuilder.Entity<AdressItem>()
                .ToTable("t_adress");
        }
    }
}
