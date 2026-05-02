# Palletwise — Seeded Findings (23 total)

## SAST (10)
| ID | CWE | File |
|---|---|---|
| PAL-SAST-001 | CWE-943  | `src/routes/shipments.js` (NoSQL injection — `{$where: req.body.q}`) |
| PAL-SAST-002 | CWE-915  | `src/routes/drivers.js` (`Object.assign(driver, req.body)`) |
| PAL-SAST-003 | CWE-798  | `src/config.js` (hardcoded MongoDB URL with credentials) |
| PAL-SAST-004 | CWE-918  | `src/services/geocode.js` (axios on user URL) |
| PAL-SAST-005 | CWE-22   | `src/routes/proofs.js` (path traversal in PoD attachment) |
| PAL-SAST-006 | CWE-330  | `src/services/tokens.js` (`Math.random()` for invite tokens) |
| PAL-SAST-007 | CWE-352  | `src/server.js` (`fastify.csrf` not registered) |
| PAL-SAST-008 | CWE-489  | `src/server.js` (`logger: 'debug'` + verbose error responses) |
| PAL-SAST-009 | CWE-78   | `src/services/labels.js` (exec with user-supplied tracking number) |
| PAL-SAST-010 | CWE-307  | `src/routes/auth.js` (no rate limiting on /login) |

## IaC (6)
- PAL-IAC-001 DocumentDB cluster public (`infra/terraform/docdb.tf`)
- PAL-IAC-002 DocumentDB no TLS (`infra/terraform/docdb.tf`)
- PAL-IAC-003 SG ingress 27017 from 0.0.0.0/0 (`infra/terraform/main.tf`)
- PAL-IAC-004 IAM `Action: s3:*` Resource `*` (`infra/terraform/iam.tf`)
- PAL-IAC-005 Container runs as root (`Dockerfile`)
- PAL-IAC-006 K8s `automountServiceAccountToken: true` + cluster-admin RB (`infra/k8s/rbac.yaml`)

## SCA (4)
| ID | Package | Version | CVE |
|---|---|---|---|
| PAL-SCA-001 | mongoose       | 5.13.20  | CVE-2022-24304 |
| PAL-SCA-002 | qs             | 6.5.2    | CVE-2022-24999 |
| PAL-SCA-003 | jsonwebtoken   | 8.5.1    | CVE-2022-23529 |
| PAL-SCA-004 | tar            | 6.1.0    | CVE-2021-37701 |

## Pipeline (3)
- PAL-CI-001 Hardcoded npm token in `.npmrc` step
- PAL-CI-002 No permissions block
- PAL-CI-003 Image pushed to ECR using `latest` tag without digest pinning
