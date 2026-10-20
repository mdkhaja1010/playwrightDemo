# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staffAPICopy.spec.ts >> update staff member RahulU
- Location: tests\staffAPICopy.spec.ts:106:5

# Error details

```
Error: apiRequestContext.post: connect ECONNREFUSED ::1:8080
Call log:
  - → POST http://localhost:8080/api/staff
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqdDBKRjFyLWRVN0tiTzFaTTZXcXVLc211U2tLMDhmUEotQnQ3bUkwSWRRIn0.eyJleHAiOjE3OTI0NzE3MjcsImlhdCI6MTc5MjQ3MTQyNywianRpIjoiZjQ1ZDgzYjQtMjIxYi00YmI2LWExYmUtZDc4YzEwMzM5NjcwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJiNThkZjcwLWVhMDgtNDJjZi1hODVmLTVmNjA5MTQxZmNkYyIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15Y2xpZW50MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbXlyZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJjbGllbnRIb3N0IjoiMTcyLjE3LjAuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LW15Y2xpZW50MSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTcuMC4xIiwiY2xpZW50X2lkIjoibXljbGllbnQxIn0.BwWTsYedMV6tnVpWi5KpXaUE5LmiPkRoT5KoW73oZETYi4k-O92YBlk0WPO6J0J4Ls21Th3YoLxm-UQW_Yn8PHMDGGi0c0bbz5UbBD366y0ZkujjbKV7qbOiAr9TvBmvFjE1BfjuizNaQWzzDy9ORsEhkHxwnHzYH3dh2MMYzDQbMWnBC3AkxVnG2W-_ByMtepXDuO_Ja4qhQG20aQdLLHTdI3dSO5W_iNCERP-8_8kwWHe-fFu1d0RJmYj4fZzJ3JGy0BfZ0nhGKpQtc9up6y81ZLn-of19YrEWZ2j3wVHxxnOFzIbp7zKXQkqUnVtkHU7MXR-16DZ7l9cPE8vdwQ
    - Content-Type: application/json
    - content-length: 59

```