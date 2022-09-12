using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class Auto
    {
        public string Patente { get; set; } = null!;
        public int? Modelo { get; set; }
        public string? Marca { get; set; }
    }
}
