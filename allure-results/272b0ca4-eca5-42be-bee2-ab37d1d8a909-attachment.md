# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staffAPICopy.spec.ts >> creating staff member Suresh
- Location: tests\staffAPICopy.spec.ts:43:5

# Error details

```
Error: apiRequestContext.post: connect ECONNREFUSED ::1:8080
Call log:
  - → POST http://localhost:8080/api/staff
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqdDBKRjFyLWRVN0tiTzFaTTZXcXVLc211U2tLMDhmUEotQnQ3bUkwSWRRIn0.eyJleHAiOjE3OTI0NzE3MjMsImlhdCI6MTc5MjQ3MTQyMywianRpIjoiNDE1OTFiZTEtNGNmYi00ZDUzLTlhZjEtZDg5Yzc1YzhmMTY5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJiNThkZjcwLWVhMDgtNDJjZi1hODVmLTVmNjA5MTQxZmNkYyIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15Y2xpZW50MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbXlyZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJjbGllbnRIb3N0IjoiMTcyLjE3LjAuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LW15Y2xpZW50MSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTcuMC4xIiwiY2xpZW50X2lkIjoibXljbGllbnQxIn0.SEiAZzgWo8amXalH-IO9z8-k7Bf-GkFBtMlgyVZAJfTxI602pHjBhGBWW35BnyB40jHDzrwP2U_ZKiAJHK79QC_RkYsuJZOHxUk7Gp1cANAx-BIXDgzcRaCfFmf5MLIRZiC0dnYUxExmB-jJIsm_9jUaLol-myznHPbWWxVc09jlPOAe3KINoKo0a5S6gcN1DvnMUu6tHH5nHmhZ3_AQGlB7mZYezZeiU3hxyTpXMo5D0lbx5GnC6kZxb3no1Umzz3o16PCod3nHX_HDBgAueewt2TDXCJDTXt68JJtFRe4OUdRwbxRHOV2AGQGM5TQXgX-xtL-4_4evUIftN3-UJw
    - Content-Type: application/json
    - content-length: 71

```