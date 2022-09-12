using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Api.Data
{
    public partial class Practica1Context : DbContext
    {
        public Practica1Context()
        {
        }

        public Practica1Context(DbContextOptions<Practica1Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Auto> Autos { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("Host=localhost; Database=Practica1; Username=postgres; Password=gasti123");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Auto>(entity =>
            {
                entity.HasKey(e => e.Patente)
                    .HasName("autos_pkey");

                entity.ToTable("autos");

                entity.Property(e => e.Patente)
                    .HasMaxLength(10)
                    .HasColumnName("patente");

                entity.Property(e => e.Marca)
                    .HasMaxLength(15)
                    .HasColumnName("marca");

                entity.Property(e => e.Modelo).HasColumnName("modelo");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
