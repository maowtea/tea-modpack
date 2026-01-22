# Tea Modpack (Forge 1.20.1)

This repo contains a **full CurseForge MC instance** (mods + configs + personal settings) so everyone can run the exact same setup without manual fixing (KubeJS mismatch, config differences, etc.).

## What’s included
- `mods` (all mod .jar files)
- `config`, `defaultconfigs`, `kubejs` (pack behavior / scripts)
- `resourcepacks`, `shaderpacks`
- `journeymap` (map data)
- Personal settings
- Other instance files as needed

## Requirements
- **Minecraft:** 1.20.1  
- **Mod Loader:** Forge (match server/pack version)  
- **Java:** Java 17+ recommended for 1.20.1

> IMPORTANT: Client and server must run the **same Minecraft version** and the **same required server-side mods**.

---

# Install (Choose your launcher)

## A) CurseForge App (recommended for legit people)
1. Open [CurseForge](https://www.curseforge.com/download/app) → Choose Minecraft.
2. Close Minecraft if it’s running.
3. Download this repo as ZIP:
   - GitHub repo page → **Code** → **Download ZIP**
4. Don't Extract the ZIP.
5. **Import** → **Choose .zip file** → Select the downloaded .zip file → Open.
6. Click Play to Launch the profile.

If you see “Incompatible FML modded server / Server mod list is not compatible”:
- You are missing server-required mods or have wrong versions. Re-copy `mods/` from this repo and try again.

---

## B) Legacy Launcher (recommended for cracked)
1. Download [Legacy Launcher](https://llaun.ch/en) (remove tlauncher files from your computer including in `%appdata%`) 
2. Follow [A section](https://github.com/crishshato/tea-modpack?tab=readme-ov-file#a-curseforge-app-recommended-for-legit-people) to import mod profile to CurseForge.
2. Then integrate it to your launcher, use this [guide](https://youtu.be/GNAjUdUppGM?si=9t8qDPdx9S2YOhzW) 
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
- Do not add/remove mods; it will cause mismatch errors.

---

# Credits
All mod credits belong to their original authors. This repo is for private sharing within our group.
