import os

LANGUAGES = os.getenv("LANGUAGES", "sq,en").split(",")
USE_GPU = os.getenv("USE_GPU", "false").lower() == "true"
CONFIDENCE_THRESHOLD = float(os.getenv("CONFIDENCE_THRESHOLD", "0.6"))
USE_ANGLE_CLS = os.getenv("USE_ANGLE_CLS", "true").lower() == "true"
PORT = int(os.getenv("PORT", "8000"))
