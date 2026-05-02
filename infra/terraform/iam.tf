# PAL-IAC-004: app role with s3:* on *.
resource "aws_iam_role" "palletwise_app" {
  name = "palletwise-app"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = { Service = "ec2.amazonaws.com" },
      Action    = "sts:AssumeRole"
    }]
  })
  inline_policy {
    name = "s3-all"
    policy = jsonencode({
      Version   = "2012-10-17",
      Statement = [{ Effect = "Allow", Action = "s3:*", Resource = "*" }]
    })
  }
}
