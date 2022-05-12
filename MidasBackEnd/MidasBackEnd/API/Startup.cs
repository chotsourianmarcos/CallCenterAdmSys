using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers(x => x.AllowEmptyInputInBodyModelBinding = true);
            services.AddMvc()
            .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            //services.AddCors(o => o.AddPolicy("EnableLocalPort4200", builder =>
            //{
            //    builder.WithOrigins("http://localhost:4200")
            //           .AllowAnyMethod()
            //           .AllowAnyHeader();
            //}));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(
            options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()
            );

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            //app.UseMvc();
        }
    }
}
