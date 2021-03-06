﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UpdateActivities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Activities",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Activities",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Activities",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Venue",
                table: "Activities",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "Venue",
                table: "Activities");
        }
    }
}
