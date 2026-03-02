@echo off
setlocal
powershell -Command ^
"Write-Host '==================================================' -ForegroundColor Green; ^
Write-Host 'l                                                l' -ForegroundColor Green; ^
Write-Host 'l                  DBM UPDATER                   l' -ForegroundColor Green; ^
Write-Host 'l                                                l' -ForegroundColor Green; ^
Write-Host '==================================================' -ForegroundColor Green"
echo.
echo.
:: Settings
set "VERSION=latest"
set "DOWNLOAD_URL=https://github.com/shadoow051/DBM-v14/releases/download/%VERSION%/dbm.zip"
set "DEFAULT_DBM_PATHS="C:\Program Files\Steam\steamapps\common\Discord Bot Maker" "C:\Program Files (x86)\Steam\steamapps\common\Discord Bot Maker""
set "DBM_PATH="
set "TEMP_ZIP=%TEMP%\dbm.zip"
:: Searching DBM
powershell -Command "Write-Host 'Searching Discord Bot Maker in default paths...' -ForegroundColor Yellow"
for %%P in (%DEFAULT_DBM_PATHS%) do (
    if exist "%%~P\Discord Bot Maker.exe" (
        set "DBM_PATH=%%~P"
        goto found
    )
)
powershell -Command "Write-Host 'Not found in default paths.' -ForegroundColor Red"
echo.
powershell -Command "Write-Host 'Press ENTER to search all drives (this may take a while)...' -ForegroundColor Yellow"
pause >nul
for %%D in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    if exist "%%D:\" (
        for /f "delims=" %%F in ('dir "%%D:\Discord Bot Maker.exe" /s /b 2^>nul') do (
            set "DBM_PATH=%%~dpF"
            goto found
        )
    )
)
powershell -Command "Write-Host 'Discord Bot Maker cannot be found in the default paths or on any drive.' -ForegroundColor Red"
pause
exit /b
:found
powershell -Command "Write-Host 'Found Discord Bot Maker: %DBM_PATH%' -ForegroundColor Green"
echo.
:: Downloading
powershell -Command "Write-Host 'Downloading latest DBM...' -ForegroundColor Yellow"
curl -L "%DOWNLOAD_URL%" -o "%TEMP_ZIP%"
if errorlevel 1 (
    powershell -Command "Write-Host 'Download failed!' -ForegroundColor Red"
    pause
    exit /b
)
:: File Update
set "EXTRACT_DIR=%TEMP%\dbm_extract"
if exist "%EXTRACT_DIR%" rmdir /s /q "%EXTRACT_DIR%"
mkdir "%EXTRACT_DIR%"
powershell -Command "$ProgressPreference='SilentlyContinue'; Expand-Archive -Path '%TEMP_ZIP%' -DestinationPath '%EXTRACT_DIR%' -Force"
if exist "%EXTRACT_DIR%\dbm" (
    xcopy "%EXTRACT_DIR%\dbm\*" "%DBM_PATH%\" /E /H /Y /Q
) else (
    xcopy "%EXTRACT_DIR%\*" "%DBM_PATH%\" /E /H /Y /Q
)
rmdir /s /q "%EXTRACT_DIR%"
del "%TEMP_ZIP%"
echo.
powershell -Command "Write-Host 'DBM has been updated successfully!' -ForegroundColor Green"
pause