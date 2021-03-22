using Microsoft.EntityFrameworkCore.Migrations;

namespace Movies.Server.Migrations
{
    public partial class addrelationcommenttouser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_AspNetUsers_RatedById",
                table: "Comments");

            migrationBuilder.RenameColumn(
                name: "RatedById",
                table: "Comments",
                newName: "CommentedById");

            migrationBuilder.RenameIndex(
                name: "IX_Comments_RatedById",
                table: "Comments",
                newName: "IX_Comments_CommentedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_AspNetUsers_CommentedById",
                table: "Comments",
                column: "CommentedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_AspNetUsers_CommentedById",
                table: "Comments");

            migrationBuilder.RenameColumn(
                name: "CommentedById",
                table: "Comments",
                newName: "RatedById");

            migrationBuilder.RenameIndex(
                name: "IX_Comments_CommentedById",
                table: "Comments",
                newName: "IX_Comments_RatedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_AspNetUsers_RatedById",
                table: "Comments",
                column: "RatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
