namespace Movies.Server
{
    using Infrastructure.Extensions;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;

    public class Startup
    {
        public Startup(IConfiguration configuration) => this.Configuration = configuration;

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                  .AddDatabase(this.Configuration)
                  .AddIdentity()
                  .AddJwtAuthentication(services.GetApplicationSettings(this.Configuration))
                  .AddApplicationServices()
                   .AddSwagger()
                  .AddApiControllers();
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app
                .UseSwaggerUI()
                .UseRouting()
                .UseCors("MyPolicy")
                .UseAuthentication()
                .UseAuthorization()
                .UseHttpsRedirection()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers();
                }).ApplyMigrations();
        }
    }
}
