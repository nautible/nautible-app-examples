import logging.config
import os

# ログ設定
logging.config.fileConfig("logging_config.conf", os.environ)
