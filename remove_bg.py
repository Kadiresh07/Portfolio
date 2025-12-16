from rembg import remove
from PIL import Image
import sys

try:
    input_path = sys.argv[1]
    output_path = sys.argv[2]

    print(f"Processing: {input_path} -> {output_path}")
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print("Background removed successfully.")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
