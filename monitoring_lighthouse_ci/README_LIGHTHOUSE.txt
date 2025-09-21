Lighthouse CI — Quick Setup

1) In GitHub → your repo → Settings → Secrets and variables → Actions → New repository secret:
   - Name: VERCEL_PREVIEW_BASE
   - Value: your Vercel preview base URL, e.g. https://diesel-repair-xxxx.vercel.app

2) Add this workflow to your repo:
   - Place .github/workflows/lighthouse.yml in your repository.
   - Commit to 'staging' or run manually via 'Actions' → 'Run workflow'.

3) After it runs:
   - Open job logs to see LCP/CLS/INP for '/', '/locations/phoenix', '/services/emergency-roadside-assistance'.
   - Each run uploads a temporary public report; the URL appears in logs.
