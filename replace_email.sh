#!/bin/bash

# Variables
folder_path="." # Current directory (where the script is located)
old_email="info@kd-services.co.za" # Replace with the old email address
new_email="raoul@kinganddiamondservices.com" # Replace with the new email address

# Loop through all HTML files in the current directory
for file in "$folder_path"/*.html; do
  # Use sed to replace the old email with the new one in each file
  sed -i "s/$old_email/$new_email/g" "$file"
  echo "Updated $file"
done

echo "All email addresses updated."
