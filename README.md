# Hey, I'm Zach

Software engineer based in Florida. Currently building cloud-based healthcare software. 

## Projects

- 🔎 **[pgsync-elasticsearch-bookstore](https://github.com/zachbroad/pgsync-elasticsearch-bookstore)** — FastAPI bookstore where CRUD goes to Postgres and search is served from Elasticsearch, kept in sync by [pgsync](https://pgsync.com) over logical replication. Includes a query-mode search playground and a SQLAdmin UI. ([Write-up](https://www.zachbroad.com/blog/pgsync/))
- 🔄 **[debezium-elasticsearch-cdc](https://github.com/zachbroad/debezium-elasticsearch-cdc)** — Syncs a multi-table Postgres aggregate into a single Elasticsearch index via Kafka + Debezium + a search worker that treats CDC events as triggers and re-fetches the full aggregate from Postgres. ([Write-up](https://www.zachbroad.com/blog/postgres-elasticsearch-cdc/))
- 🛰️ **[dns-monitor](https://github.com/zachbroad/dns-monitor)** — Lightweight DNS uptime/drift monitor in Go. Resolves configured records on an interval, flags drift against expected answers, persists history to SQLite, and serves an HTMX dashboard. Multi-arch image on GHCR. ([Docs](https://zachbroad.github.io/dns-monitor))
- 🪝 **[NitroHook](https://nitrohook.com)** — Self-hosted webhook gateway in Go that receives, transforms (sandboxed JS), and fans out deliveries to HTTP, Slack, SMTP, Twilio, and more. ([GitHub](https://github.com/zachbroad/nitrohook))
- 🎲 **[Categories.LIVE](https://categories.zachbroad.com)** — Real-time multiplayer Scattergories with LLM-graded answers. React Router v7 + Socket.IO, deployed on Fly.io. ([GitHub](https://github.com/zachbroad/categories-live))
- 📱 **[Flip Phone Finder](https://flipphonefinder.com)** — Directory and comparison tool for flip phones and minimalist devices. Next.js 15, Drizzle ORM, Supabase. ([GitHub](https://github.com/zachbroad/flipphonefinder))
- 🐶 **[FrenchieWiki](https://frenchiewiki.com)** — Niche website I built and scaled to 1.3M annual users and $100K+ ARR. Top 1% of U.S. publishers by traffic.
- 💬 **[Java IRC Server](https://github.com/zachbroad/Java-IRC-Server)** — IRC server implementing RFC 1459/2812 with channels, private messaging, and multi-client support.
- 🕹️ **[CHIP-8 Emulator](https://github.com/zachbroad/CHIP-8_Emulator)** — CHIP-8 emulator written in C with SDL2.
