# Data Ingestion API

This project provides a REST API that allows users to upload CSV files containing dataset information. The data from the CSV file is ingested, parsed, and stored in a MongoDB database for further processing and analysis.

## Features

- Upload CSV files via REST API.
- Parse CSV data and validate the required fields.
- Store the parsed data in MongoDB.
- Handle file uploads using `multer`.
- Parse CSV data using `csv-parser`.
- Error handling for file upload, parsing, and database operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (MongoDB ORM)
- Multer (for file uploads)
- CSV-Parser (for parsing CSV files)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Key Sections

- **Project Overview**: Explains what the project does (CSV file upload, parsing, and data storage).
- **Installation**: How to install dependencies and run the project.
- **API Endpoints**: Describes how to upload a CSV file.
- **Sample CSV Format**: Provides an example of the expected CSV structure.
- **Project Structure**: Gives an overview of the project’s file organization.
- **Future Enhancements**: Lists potential improvements. 
