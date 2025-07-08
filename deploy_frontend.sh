#!/bin/bash

echo "===== Starting GLA-Online Frontend Deploy ====="

# Navigate to the repo
cd /var/www/running_sites/nocolleges.com/GLA-Online/

# Pull latest code
echo "Pulling latest code..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build the project
echo "Building project..."
pnpm run build

# Copy build output to LIVE SITE ROOT
echo "Copying build output to live site..."
cp -rT /var/www/running_sites/nocolleges.com/GLA-Online/dist  /var/www/running_sites/nocolleges.com/public_html/

echo "===== GLA-Online Frontend Deploy Completed ====="
