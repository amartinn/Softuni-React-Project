using Microsoft.EntityFrameworkCore.Migrations;

namespace Movies.Server.Migrations
{
    public partial class addrelationsusercomment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RatedById",
                table: "Comments",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_RatedById",
                table: "Comments",
                column: "RatedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_AspNetUsers_RatedById",
                table: "Comments",
                column: "RatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_AspNetUsers_RatedById",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_RatedById",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "RatedById",
                table: "Comments");
        }
    }
}
