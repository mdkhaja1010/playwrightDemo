# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staffAPICopy.spec.ts >> getting staff details
- Location: tests\staffAPICopy.spec.ts:160:5

# Error details

```
Error: apiRequestContext.post: connect ECONNREFUSED ::1:8080
Call log:
  - → POST http://localhost:8080/api/staff
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqdDBKRjFyLWRVN0tiTzFaTTZXcXVLc211U2tLMDhmUEotQnQ3bUkwSWRRIn0.eyJleHAiOjE3OTI0MjQ3NDgsImlhdCI6MTc5MjQyNDQ0OCwianRpIjoiYzVjNWRiMGItNDllZS00NmViLTkxYTYtNWM4ZDY0Mjc1MjliIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJiNThkZjcwLWVhMDgtNDJjZi1hODVmLTVmNjA5MTQxZmNkYyIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15Y2xpZW50MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbXlyZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJjbGllbnRIb3N0IjoiMTcyLjE3LjAuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LW15Y2xpZW50MSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTcuMC4xIiwiY2xpZW50X2lkIjoibXljbGllbnQxIn0.bGoE2f4drvuz9_Z_-GHjIrguM53riVjYaGnW4uOUeUn0CUPdvMBDn7dIrwUd4Kw6c-33SDqwNLVFfrA7noeOsCe93lePgRVIJRomZfRamkl5u_doknyXszh12A3B4efCP1b3-hkbYXPxFd1ghlr6_q4NuA-cfahqKyC7MqbN0qw4hD2PrBmZyawaWtT_nrusaw7YDAFbY4BF8KvlKaHof-Hb5uEVghClCRf_bN0CqZh1MNjrx8Z9sBR7vL4uMdLfTszLLZ5R_tsHAI8SfMjMikzJR28kTSFNdKsBRQ1__DJqJjIGyWfnuYr8aUjM-5L3IYNVAoxkyl7xn7jRbbIPRQ
    - Content-Type: application/json
    - content-length: 66

```