using Microsoft.EntityFrameworkCore;
using protasks.Data.Context;
using protasks.Data.Repository;
using protasks.Domain.Interfaces.Repository;
using protasks.Domain.Interfaces.Services;
using protasks.Domain.Services;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<DataContext>(options => options.UseSqlite(builder.Configuration.GetConnectionString("Default")!));

builder.Services.AddTransient<IBaseRepository, BaseRepository>();
builder.Services.AddScoped<ITaskRepository, TaskRepository>();
builder.Services.AddScoped<ITaskService, TaskService>();


builder.Services.AddControllers().AddJsonOptions(option => option.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));

app.MapControllers();

app.Run();
