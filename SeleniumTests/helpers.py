from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE_URL = "http://localhost:3000"


def search(driver, text):
    box = driver.find_element(By.ID, "place-search")
    box.send_keys(Keys.CONTROL, "a")  # box.clear() does not work well with React
    box.send_keys(Keys.BACKSPACE)
    box.send_keys(text)
    return box


def get_cards(driver):
    return driver.find_elements(By.CSS_SELECTOR, "[data-testid^='place-card-']")


def wait_for_count(driver, n):
    word = "place" if n == 1 else "places"
    WebDriverWait(driver, 5).until(
        EC.text_to_be_present_in_element((By.ID, "results-count"), f"Found: {n} {word}")
    )