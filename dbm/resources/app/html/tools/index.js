(async () => {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Info
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  // DBM.mainLoc (dbm path)
  // DBM.npmLoc (dbm npm path)
  // DBM.actLocs (bot actions path)
  // DBM.evtLocs (bot events path)
  // DBM.extLocs (bot extensions path)
  // DBM._currentProject (bot path)

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Imports
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  const fs = require("fs");
  const path = require("path");
  const https = require("https");
  const { shell } = require("electron");
  const { dialog } = require("@electron/remote");

  const url = {
    folder: {
      actions: "https://github.com/shadoow051/DBM-v14/tree/main/bot/actions",
      events: "https://github.com/shadoow051/DBM-v14/tree/main/bot/events",
      extensions:
        "https://github.com/shadoow051/DBM-v14/tree/main/bot/extensions",
      html: "https://github.com/shadoow051/DBM-v14/tree/main/dbm/resources/app/html",
      themes: "https://github.com/shadoow051/DBM-v14/tree/main/dbm/themes",
      translations:
        "https://github.com/shadoow051/DBM-v14/tree/main/dbm/translations",
      nodejs:
        "https://github.com/shadoow051/DBM-v14/tree/main/dbm/resources/app/nodejs",
    },
    file: {
      bot: "https://github.com/shadoow051/DBM-v14/blob/main/bot/bot.js",
      shard: "https://github.com/shadoow051/DBM-v14/blob/main/bot/shard.js",
      permissions:
        "https://github.com/shadoow051/DBM-v14/blob/main/dbm/config/Permissions.json",
    },
    footer: {
      github: "https://gh.dbm-poland.site",
      discord: "https://dc.dbm-poland.site",
      youtube: "https://yt.dbm-poland.site",
    },
  };

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Overriding API Values
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  console.clear();

  window.DBM.desiredVersions = DBM.desiredVersions = {
    "discord.js": "^14.25.1",
    jimp: "latest",
  };

  window.DBM.desiredMusicVersions = DBM.desiredMusicVersions = {
    "@discordjs/voice": "latest",
    "@discordjs/opus": "latest",
    "@snazzah/davey": "latest",
    opusscript: "latest",
    "ffmpeg-static": "latest",
    youtubei: "latest",
  };

  DBM.nodeLoc = path.dirname(DBM.npmLoc);

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Functions
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  function downloadFileFromUrl(url, localPath) {
    return new Promise((resolve, reject) => {
      if (url.includes("/blob/")) {
        url = url
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/blob/", "/");
      }
      fs.mkdirSync(path.dirname(localPath), { recursive: true });
      const file = fs.createWriteStream(localPath);
      https
        .get(url, (res) => {
          if (res.statusCode !== 200)
            return reject(new Error(`HTTP ${res.statusCode}`));
          res.pipe(file);
          file.on("finish", () => file.close(resolve));
        })
        .on("error", (err) => {
          fs.unlink(localPath, () => reject(err));
        });
    });
  }

  async function downloadFilesFromFolderUrl(url, localPath) {
    if (!url.includes("/tree/")) {
      throw new Error("Unknow Link URL!");
    }
    const match = url.match(
      /github\.com\/([^\/]+)\/([^\/]+)\/tree\/([^\/]+)\/(.+)/,
    );
    if (!match) throw new Error("Unknow Link URL!");
    const [, user, repo, branch, folderPath] = match;
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${folderPath}?ref=${branch}`;
    const options = { headers: { "User-Agent": "Node.js" } };
    const data = await new Promise((resolve, reject) => {
      https
        .get(apiUrl, options, (res) => {
          let body = "";
          res.on("data", (chunk) => (body += chunk));
          res.on("end", () => resolve(body));
        })
        .on("error", reject);
    });
    const items = JSON.parse(data);
    for (const item of items) {
      const localItemPath = path.join(localPath, item.name);
      if (item.type === "file") {
        await downloadFileFromUrl(item.download_url, localItemPath);
      } else if (item.type === "dir") {
        await downloadFilesFromFolderUrl(
          `https://github.com/${user}/${repo}/tree/${branch}/${item.path}`,
          localItemPath,
        );
      }
    }
  }

  function copyDirRecursive(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyDirRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  function removeDirRecursive(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, entry);
      if (fs.lstatSync(fullPath).isDirectory()) {
        removeDirRecursive(fullPath);
      } else {
        fs.unlinkSync(fullPath);
      }
    }
    fs.rmdirSync(dir);
  }

  function restoreSelectedBackup(backupName) {
    try {
      const projectPath = DBM._currentProject;
      const backupsPath = path.join(projectPath, "backups");
      const backupDataPath = path.join(backupsPath, backupName, "data");
      const currentDataPath = path.join(projectPath, "data");
      if (!fs.existsSync(backupDataPath)) {
        // alert("The selected backup is invalid!");
        dialog.showMessageBox({
          type: "error",
          title: "Discord Bot Maker - Backup",
          message: "The selected backup is invalid!",
          buttons: ["OK"],
        });
        return;
      }
      if (fs.existsSync(currentDataPath)) {
        removeDirRecursive(currentDataPath);
      }
      copyDirRecursive(backupDataPath, currentDataPath);
      $("#restoreBackupModal").modal("hide");
      // alert("Backup successfully restored!");
      dialog.showMessageBox({
        type: "info",
        title: "Discord Bot Maker - Backup",
        message: "Backup successfully restored!",
        buttons: ["OK"],
      });
    } catch (err) {
      // alert("Backup restore error:\n" + err.message);
      dialog.showMessageBox({
        type: "error",
        title: "Discord Bot Maker - Backup",
        message: "Backup restore error:\n" + err.message,
        buttons: ["OK"],
      });
    }
  }

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Update Download
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  {
    document.addEventListener("DOMContentLoaded", () => {
      const button = document.getElementById("downloadUpdate");
      button.addEventListener("click", async () => {
        const originalButtonHTML = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '<i class="spinner loading icon"></i>Downloading...';

        const updateType = parseInt(
          document.getElementById("updateTypeToDownload").value,
          10,
        );
        if (button) {
          if (updateType === 0) {
            // [BOT] (Full Update)
            await downloadFilesFromFolderUrl(url.folder.actions, DBM.actLocs);
            await downloadFilesFromFolderUrl(url.folder.events, DBM.evtLocs);
            await downloadFilesFromFolderUrl(
              url.folder.extensions,
              DBM.extLocs,
            );
            downloadFileFromUrl(
              url.file.bot,
              path.join(DBM.extLocs, "..", "bot.js"),
            );
            downloadFileFromUrl(
              url.file.shard,
              path.join(DBM.extLocs, "..", "shard.js"),
            );
            // alert(`Successfully updated "BOT (Full Update)"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "BOT (Full Update)"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 1) {
            // [BOT] Actions
            await downloadFilesFromFolderUrl(url.folder.actions, DBM.actLocs);
            // alert(`Successfully updated "BOT Actions"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "BOT Actions"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 2) {
            // [BOT] Events
            await downloadFilesFromFolderUrl(url.folder.events, DBM.evtLocs);
            // alert(`Successfully updated "BOT Events"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "BOT Events"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 3) {
            // [BOT] Extensions
            await downloadFilesFromFolderUrl(
              url.folder.extensions,
              DBM.extLocs,
            );
            // alert(`Successfully updated "BOT Extensions"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "BOT Extensions"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 4) {
            // [BOT] File (bot.js)
            downloadFileFromUrl(
              url.file.bot,
              path.join(DBM._currentProject, "bot.js"),
            );
            // alert(`Successfully updated "BOT File (bot.js)"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "BOT File (bot.js)"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 5) {
            // [BOT] File (shard.js)
            downloadFileFromUrl(
              url.file.shard,
              path.join(DBM._currentProject, "shard.js"),
            );
            // alert(`Successfully updated "BOT File (shard.js)"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "BOT File (shard.js)"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 6) {
            // [DBM] (Full Update)
            await downloadFilesFromFolderUrl(
              url.folder.html,
              path.join(DBM.mainLoc, "resources", "app", "html"),
            );
            downloadFileFromUrl(
              url.file.permissions,
              path.join(DBM.mainLoc, "config", "Permissions.json"),
            );
            await downloadFilesFromFolderUrl(
              url.folder.themes,
              path.join(DBM.mainLoc, "themes"),
            );
            await downloadFilesFromFolderUrl(
              url.folder.translations,
              path.join(DBM.mainLoc, "translations"),
            );
            await downloadFilesFromFolderUrl(url.folder.nodejs, DBM.nodeLoc);
            // alert(`Successfully updated "DBM (Full Update)"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "DBM (Full Update)"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 7) {
            // [DBM] Html
            await downloadFilesFromFolderUrl(
              url.folder.html,
              path.join(DBM.mainLoc, "resources", "app", "html"),
            );
            // alert(`Successfully updated "DBM Html"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "DBM Html"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 8) {
            // [DBM] Permissions
            downloadFileFromUrl(
              url.file.permissions,
              path.join(DBM.mainLoc, "config", "Permissions.json"),
            );
            // alert(`Successfully updated "DBM Permissions"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "DBM Permissions"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 9) {
            // [DBM] Themes
            await downloadFilesFromFolderUrl(
              url.folder.themes,
              path.join(DBM.mainLoc, "themes"),
            );
            // alert(`Successfully updated "DBM Themes"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "DBM Themes"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 10) {
            // [DBM] Translations
            await downloadFilesFromFolderUrl(
              url.folder.translations,
              path.join(DBM.mainLoc, "translations"),
            );
            // alert(`Successfully updated "DBM Translations"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "DBM Translations"!`,
              buttons: ["OK"],
            });
          } else if (updateType === 11) {
            // [DBM] NodeJS
            await downloadFilesFromFolderUrl(url.folder.nodejs, DBM.nodeLoc);
            // alert(`Successfully updated "DBM NodeJS"!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Successfully updated "DBM NodeJS"!`,
              buttons: ["OK"],
            });
          }
        }
        button.disabled = false;
        button.innerHTML = originalButtonHTML;
      });
    });
  }

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Create/Restore/Delete Backup
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  {
    document.addEventListener("DOMContentLoaded", () => {
      const createBackupBtn = document.getElementById("createBackup");
      const restoreBackupBtn = document.getElementById("restoreBackup");
      const deleteBackupBtn = document.getElementById("deleteBackup");
      if (createBackupBtn) {
        createBackupBtn.addEventListener("click", () => {
          try {
            const projectPath = DBM._currentProject;
            if (!projectPath) {
              throw new Error("No current project loaded");
            }
            const dataFolderPath = path.join(projectPath, "data");
            if (!fs.existsSync(dataFolderPath)) {
              throw new Error("Data folder does not exist");
            }
            const now = new Date();
            const pad = (n) => n.toString().padStart(2, "0");
            const timestamp = `${pad(now.getHours())}_${pad(
              now.getMinutes(),
            )}_${pad(now.getSeconds())}-${pad(now.getDate())}-${pad(
              now.getMonth() + 1,
            )}-${now.getFullYear()}`;
            const backupRoot = path.join(projectPath, "backups", timestamp);
            const backupDataPath = path.join(backupRoot, "data");
            fs.mkdirSync(backupDataPath, { recursive: true });
            copyDirRecursive(dataFolderPath, backupDataPath);
            // alert(`Backup "${timestamp}" created successfully!`);
            dialog.showMessageBox({
              type: "info",
              title: "Discord Bot Maker - Backup",
              message: `Backup "${timestamp}" created successfully!`,
              buttons: ["OK"],
            });
          } catch (err) {
            // alert("Backup error:\n" + err.message);
            dialog.showMessageBox({
              type: "error",
              title: "Discord Bot Maker - Backup",
              message: "Backup error:\n" + err.message,
              buttons: ["OK"],
            });
          }
        });
      }
      if (restoreBackupBtn) {
        restoreBackupBtn.addEventListener("click", () => {
          try {
            const projectPath = DBM._currentProject;
            const backupsPath = path.join(projectPath, "backups");
            const select = document.getElementById("backupSelect");
            select.innerHTML = "";
            if (!fs.existsSync(backupsPath)) {
              // alert("No backups found!");
              dialog.showMessageBox({
                type: "warning",
                title: "Discord Bot Maker - Backup",
                message: `No backups found!`,
                buttons: ["OK"],
              });
              return;
            }
            const backups = fs
              .readdirSync(backupsPath)
              .filter((name) =>
                fs.existsSync(path.join(backupsPath, name, "data")),
              );
            if (!backups.length) {
              // alert("No backups found!");
              dialog.showMessageBox({
                type: "warning",
                title: "Discord Bot Maker - Backup",
                message: `No backups found!`,
                buttons: ["OK"],
              });
              return;
            }
            for (const backup of backups) {
              const option = document.createElement("option");
              option.value = backup;
              option.textContent = backup;
              select.appendChild(option);
            }
            $("#backupSelect").dropdown();
            $("#restoreBackupModal")
              .modal({
                closable: true,
                onApprove: () => {
                  restoreSelectedBackup(select.value);
                  return false;
                },
              })
              .modal("show");
          } catch (err) {
            // alert(err.message);
            dialog.showMessageBox({
              type: "error",
              title: "Discord Bot Maker - Backup",
              message: err.message,
              buttons: ["OK"],
            });
            return;
          }
        });
        if (deleteBackupBtn) {
          deleteBackupBtn.addEventListener("click", () => {
            try {
              const projectPath = DBM._currentProject;
              const backupsPath = path.join(projectPath, "backups");
              const select = document.getElementById("deleteBackupSelect");
              select.innerHTML = "";
              if (!fs.existsSync(backupsPath)) {
              } else {
                const backups = fs
                  .readdirSync(backupsPath)
                  .filter((name) =>
                    fs.existsSync(path.join(backupsPath, name, "data")),
                  );
                if (!backups.length) {
                  // alert("No backups found!");
                  dialog.showMessageBox({
                    type: "warning",
                    title: "Discord Bot Maker - Backup",
                    message: `No backups found!`,
                    buttons: ["OK"],
                  });
                  return;
                }
                for (const backup of backups) {
                  const option = document.createElement("option");
                  option.value = backup;
                  option.textContent = backup;
                  select.appendChild(option);
                }
              }
              $("#deleteBackupModal")
                .modal({
                  closable: true,
                  onVisible: function () {
                    $("#deleteBackupSelect").dropdown({
                      on: "click",
                      allowAdditions: false,
                    });
                  },
                  onApprove: function () {
                    const selected = select.value;
                    if (!selected) return false;
                    const backupToDelete = path.join(backupsPath, selected);
                    try {
                      fs.rmSync(backupToDelete, {
                        recursive: true,
                        force: true,
                      });
                      // alert(`Backup "${selected}" deleted successfully!`);
                      dialog.showMessageBox({
                        type: "info",
                        title: "Discord Bot Maker - Backup",
                        message: `Backup "${selected}" deleted successfully!`,
                        buttons: ["OK"],
                      });
                      const optionToRemove = select.querySelector(
                        `option[value="${selected}"]`,
                      );
                      if (optionToRemove) optionToRemove.remove();
                      $("#deleteBackupSelect").dropdown("refresh");
                    } catch (err) {
                      // alert("Backup error:\n" + err.message);
                      dialog.showMessageBox({
                        type: "error",
                        title: "Discord Bot Maker - Backup",
                        message: "Backup error:\n" + err.message,
                        buttons: ["OK"],
                      });
                    }
                    return false;
                  },
                })
                .modal("show");
            } catch (err) {}
          });
        }
      }
    });
  }

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Footer Buttons
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  {
    document.addEventListener("DOMContentLoaded", () => {
      const githubBtn = document.getElementById("githubButton");
      const discordBtn = document.getElementById("discordButton");
      const youtubeBtn = document.getElementById("youtubeButton");
      if (githubBtn) {
        githubBtn.addEventListener("click", () => {
          shell.openExternal(url.footer.github);
        });
      }
      if (discordBtn) {
        discordBtn.addEventListener("click", () => {
          shell.openExternal(url.footer.discord);
        });
      }
      if (youtubeBtn) {
        youtubeBtn.addEventListener("click", () => {
          shell.openExternal(url.footer.youtube);
        });
      }
    });
  }
})();
