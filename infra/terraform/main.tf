provider "aws" { region = "eu-west-2" }

resource "aws_vpc" "palletwise" {
  cidr_block = "10.50.0.0/16"
}

# PAL-IAC-003: ingress 27017 from anywhere.
resource "aws_security_group" "mongo" {
  name   = "palletwise-mongo"
  vpc_id = aws_vpc.palletwise.id
  ingress {
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
