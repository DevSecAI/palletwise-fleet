resource "aws_docdb_cluster" "palletwise" {
  cluster_identifier      = "palletwise-prod"
  engine                  = "docdb"
  master_username         = "palletwise"
  master_password         = "Pallet2024!"
  skip_final_snapshot     = true

  # PAL-IAC-002: TLS not enforced on the cluster parameter group.
  cluster_parameter_group_name = aws_docdb_cluster_parameter_group.no_tls.name
}

resource "aws_docdb_cluster_parameter_group" "no_tls" {
  family = "docdb5.0"
  name   = "palletwise-no-tls"
  parameter {
    name  = "tls"
    value = "disabled"
  }
}

# PAL-IAC-001: cluster instance publicly accessible.
resource "aws_docdb_cluster_instance" "palletwise" {
  identifier         = "palletwise-prod-1"
  cluster_identifier = aws_docdb_cluster.palletwise.id
  instance_class     = "db.t3.medium"
  publicly_accessible = true
}
