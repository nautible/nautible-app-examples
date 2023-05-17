import logging.config
import os

# ログ設定
logging.config.fileConfig("logging_config.conf", {'LOG_LEVEL': os.environ.get('LOG_LEVEL'), 'LOG_FORMAT': os.environ.get('LOG_FORMAT')})
