# Tea Modpack (Forge 1.20.1) — Full Instance Share

This repo contains a **full Minecraft instance** (mods + configs + personal settings) so everyone can run the exact same setup without manual fixing (KubeJS mismatch, config differences, etc.).

## What’s included
- `mods/` (all mod .jar files)
- `config/`, `defaultconfigs/`, `kubejs/` (pack behavior / scripts)
- `resourcepacks/`, `shaderpacks/` (if present)
- `journeymap/` (map data)
- Personal settings: `options.txt`, `servers.dat`, `usercache.json`, `user-prefs.json`
- Other instance files as needed

## Requirements
- **Minecraft:** 1.20.1  
- **Mod Loader:** Forge (match server/pack version)  
- **Java:** Java 17+ recommended for 1.20.1

> IMPORTANT: Client and server must run the **same Minecraft version** and the **same required server-side mods**.

---

# Install (Choose your launcher)

## A) CurseForge App (recommended for most people)
1. Install **Minecraft 1.20.1 Forge** in CurseForge (create any Forge 1.20.1 profile).
2. Open CurseForge → click the pack profile → **⋮** → **Open Folder** (or “Open Minecraft Folder”).
3. Close Minecraft if it’s running.
4. Download this repo as ZIP:
   - GitHub repo page → **Code** → **Download ZIP**
5. Extract the ZIP.
6. Copy everything from the extracted folder **into the CurseForge profile folder** (merge/overwrite when asked).
7. Launch the profile.

If you see “Incompatible FML modded server / Server mod list is not compatible”:
- You are missing server-required mods or have wrong versions. Re-copy `mods/` from this repo and try again.

---

## B) Prism Launcher
1. Download this repo as ZIP and extract it.
2. Prism → **Add Instance** → **Import** → choose the extracted folder.
3. Make sure the instance uses **Minecraft 1.20.1 + Forge**.
4. Launch.

---

# Updating
When there’s an update:
1. Pull the latest repo changes (or re-download ZIP)
2. Copy/overwrite into your instance folder again.
3. Launch.

---

# Troubleshooting

## 1) “Incompatible FML modded server”
- Your client does not match the server modlist.
Fix:
- Make sure you are using **Forge 1.20.1**
- Ensure your `mods/` folder matches this repo exactly (no extra/old duplicates)
- Delete duplicates (example: keep only ONE `PuzzlesLib` jar version, ONE `Collective`, etc.)

## 2) Crashes on launch
- Usually caused by mismatched mod versions or duplicate jars.
Fix:
- Remove duplicates inside `mods/`
- Check `logs/latest.log` and share the error if needed

## 3) Texture/animation packs not working
- Ensure the resource packs are enabled in:
  - Minecraft → Options → Resource Packs
- If shaders are used, enable them in your shader menu.

---

# Notes
- This repo intentionally includes personal settings (`options.txt`, `journeymap/`, etc.) so everyone starts with the same experience.
- Do not add/remove mods unless the whole group agrees; it will cause mismatch errors.

---

# Credits
All mod credits belong to their original authors. This repo is for private sharing within our group.
