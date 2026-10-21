import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from helpers import BASE_URL


@pytest.fixture
def driver():
    d = webdriver.Edge()
    yield d
    d.quit()


@pytest.fixture
def places_page(driver):
    driver.get(BASE_URL + "/places")
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "results-count"))
    )
    WebDriverWait(driver, 10).until(
        lambda d: d.execute_script("return document.readyState") == "complete"
    )
    return driver