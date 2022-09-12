using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class AutoController : ControllerBase
{
    private readonly Practica1Context _context;
    public AutoController(Practica1Context context)
    {
        _context = context;
    }


    [HttpGet]
    public async Task<ActionResult<List<AutoModel>>> Get()
    {
        var autos = await _context.Autos.Select(x => new AutoModel
        {
            Patente = x.Patente,
            Modelo = x.Modelo,
            Marca = x.Marca
        }).ToListAsync();
        return Ok(autos);
    }


    [HttpGet("{patente}")]
    public async Task<ActionResult<AutoModel>> Get(string patente)
    {
        var auto = await _context.Autos.FindAsync(patente);
        if (auto == null)
        {
            return NotFound($"No se encontró el Auto con el id {patente}");
        }
        var autoModel = new Api.Data.Auto
        {
            
            Patente = auto.Patente,
            Modelo = auto.Modelo,
            Marca = auto.Marca,
        };
        return Ok(autoModel);
    }


    [HttpPost]
    public async Task<ActionResult<AutoModel>> Create(AutoCreateModel auto)
    {
        var newAuto = new Api.Data.Auto
        {
            Patente = auto.Patente,
            Modelo = auto.Modelo,
            Marca = auto.Marca,
         
        };
        _context.Autos.Add(newAuto);
        await _context.SaveChangesAsync();

        var autoModel = new AutoModel
        {
            Patente= newAuto.Patente,
            Modelo = newAuto.Modelo,
            Marca = newAuto.Marca
           
        };
        return Ok(autoModel);
    }

    [HttpPut("{patente}")]
    public async Task<ActionResult<AutoModel>> Update(string patente, AutoCreateModel request)
    {
        var auto = await _context.Autos.FindAsync(patente);
        if (auto == null)
        {
            return NotFound($"No se encontró el jugador con el id {patente}");
        }

        auto.Modelo = request.Modelo;
        auto.Marca = request.Marca;      
      
        _context.Update(auto);
        await _context.SaveChangesAsync();

        var autoModel = new AutoModel
        {
            Patente = auto.Patente,
            Modelo = auto.Modelo,
            Marca = auto.Marca
          
        };
        return Ok(autoModel);
    }

    [HttpDelete("{patente}")]
    public async Task<ActionResult> Delete(string patente)
    {
        var auto = await _context.Autos.FindAsync(patente);
        if (auto == null)
        {
            return NotFound($"No se encontró el Jugador con el id {patente}");
        }

        _context.Autos.Remove(auto);
        await _context.SaveChangesAsync();

        return Ok();
    }

}

