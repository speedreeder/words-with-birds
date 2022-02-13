using System.Collections.Concurrent;
using WordsWithBirds.Api;
using WordsWithBirds.Api.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<ConcurrentDictionary<string, Bird>>(new ConcurrentDictionary<string, Bird>());
builder.Services.AddSingleton<ConcurrentDictionary<string, Flock>>(new ConcurrentDictionary<string, Flock>());

// Add services to the container.
builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ClientPermission", policy =>
    {
        policy.AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:3000", "https://localhost:3000", "https://as-wordswithbirdsclient.azurewebsites.net", "https://wordswithbirds.com")
            .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("ClientPermission");

app.MapHub<GameHub>("/hubs/game");

app.Run();
