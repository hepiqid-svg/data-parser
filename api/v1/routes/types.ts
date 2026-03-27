// types.ts

// Define the types for the data-parser project

// Define the possible types for the data
enum DataType {
  INTEGER,
  FLOAT,
  STRING,
  BOOLEAN,
  DATETIME,
  DATE,
}

// Type definitions for the data
type Data = {
  id: number;
  name: string;
  value: number | string;
  type: DataType;
};

// Type definitions for the metadata
type Metadata = {
  id: number;
  name: string;
  description: string;
  format: {
    type: DataType;
    precision?: number;
    scale?: number;
    length?: number;
  };
};

// Type definitions for the parser
type Parser = {
  parse(data: string): Data;
  metadata(): Metadata;
};

// Type definitions for the formatter
type Formatter = {
  format(data: Data): string;
  formatMetadata(metadata: Metadata): string;
};