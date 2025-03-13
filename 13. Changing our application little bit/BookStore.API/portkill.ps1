param (
    [int]$Port
)

if (-not $Port) {
    Write-Host "Usage: .\kill-port.ps1 -Port <PORT_NUMBER>"
    exit 1
}

# Find the process using the port
$pid = netstat -ano | Select-String ":$Port" | ForEach-Object { ($_ -split '\s+')[-1] } | Select-Object -First 1

if ($pid) {
    Write-Host "Process using port $Port: PID $pid"
    
    # Kill the process
    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue

    if ($?) {
        Write-Host "Successfully killed process $pid using port $Port."
    } else {
        Write-Host "Failed to kill process $pid."
    }
} else {
    Write-Host "No process found using port $Port."
}
