# Input and output files
input_file="README.md"
output_file="./docs/portfolio.md"

# Clear the output file
> "$output_file"

# set vitepress layout 
echo --- >> "$output_file"
echo layout: home >> "$output_file"
echo --- >> "$output_file"
echo "" >> "$output_file"

# Copy portfolio table
grep -P '^\|.*\|$' "$input_file" >> "$output_file"