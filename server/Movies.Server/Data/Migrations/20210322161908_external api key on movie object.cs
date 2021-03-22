using Microsoft.EntityFrameworkCore.Migrations;

namespace Movies.Server.Migrations
{
    public partial class externalapikeyonmovieobject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ExternalAPIId",
                table: "Movies",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExternalAPIId",
                table: "Movies");
        }
    }
}
