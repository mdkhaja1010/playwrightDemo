# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staffAPICopy.spec.ts >> update staff member RameshU
- Location: tests\staffAPICopy.spec.ts:106:5

# Error details

```
Error: apiRequestContext.post: connect ECONNREFUSED ::1:8080
Call log:
  - → POST http://localhost:8080/api/staff
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqdDBKRjFyLWRVN0tiTzFaTTZXcXVLc211U2tLMDhmUEotQnQ3bUkwSWRRIn0.eyJleHAiOjE3OTI0MjQ3NDcsImlhdCI6MTc5MjQyNDQ0NywianRpIjoiMjgxN2FkMmMtMGFiZS00ZTM2LTg4NjQtODVlYTNiYjUxNjU2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJiNThkZjcwLWVhMDgtNDJjZi1hODVmLTVmNjA5MTQxZmNkYyIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15Y2xpZW50MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbXlyZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJjbGllbnRIb3N0IjoiMTcyLjE3LjAuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LW15Y2xpZW50MSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTcuMC4xIiwiY2xpZW50X2lkIjoibXljbGllbnQxIn0.mobp3AskbKiM20VxuO4xrQEg7egl3oLZfRYlla3qDNSXY3sjgQW6YVhqhxMCPMkF40yza7r-pZQDMe-QVVhBjnTNZQCVZZHbHYH4otjGC7ZmvgCtcH-MfC2LnIA1JkNO-mV_H9L_YCahRDTRRzLJjkPo40xbYJ37z63qzPxoqKykkdykurWKsqr48umjz6OqCEKKs0i776MjrI7vlo5cd__B_e8RFfFCn8alAOBiG0IQDn-pmT_2HIX1ip6ljAffxOpka5iUYujlRHVNGRYmflFrhBuZfwW2hbKPIc-fx0a99-Tpg2QcvUkxFl0T_IgJaFUfpvKC5uZDd0hN5jUXIA
    - Content-Type: application/json
    - content-length: 74

```