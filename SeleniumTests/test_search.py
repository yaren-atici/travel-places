from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from helpers import BASE_URL, search, get_cards, wait_for_count


# ===================== POSITIVE TESTS =====================

def test_places_page_shows_all_places(places_page):
    wait_for_count(places_page, 8)
    assert len(get_cards(places_page)) == 8


def test_search_by_name(places_page):
    search(places_page, "Cappadocia")
    wait_for_count(places_page, 1)
    cards = get_cards(places_page)
    assert len(cards) == 1
    assert "Cappadocia" in cards[0].text


def test_search_by_city(places_page):
    search(places_page, "Manisa")
    wait_for_count(places_page, 3)
    assert len(get_cards(places_page)) == 3


def test_search_is_case_insensitive(places_page):
    search(places_page, "pAmUkKaLe")
    wait_for_count(places_page, 1)


def test_search_with_spaces(places_page):
    search(places_page, "   Ephesus   ")
    wait_for_count(places_page, 1)


def test_search_without_turkish_characters(places_page):
    search(places_page, "izmir")
    wait_for_count(places_page, 1)


def test_clear_button_shows_all_places(places_page):
    search(places_page, "Manisa")
    wait_for_count(places_page, 3)
    places_page.find_element(By.ID, "clear-search").click()
    wait_for_count(places_page, 8)


def test_click_result_opens_detail_page(places_page):
    search(places_page, "Sardis")
    wait_for_count(places_page, 1)
    get_cards(places_page)[0].click()
    WebDriverWait(places_page, 10).until(lambda d: "/places/2" in d.current_url)
    WebDriverWait(places_page, 10).until(lambda d: "About this place" in d.page_source)


# ---------- new in v2 ----------

def test_search_in_highlights(places_page):
    search(places_page, "Artemis")
    wait_for_count(places_page, 1)
    assert "Sardis" in get_cards(places_page)[0].text


def test_search_more_than_one_word(places_page):
    search(places_page, "manisa tulip")
    wait_for_count(places_page, 1)
    assert "Spil Mountain" in get_cards(places_page)[0].text


# ===================== NEGATIVE TESTS =====================

def test_search_non_existing_place(places_page):
    search(places_page, "Paris")
    wait_for_count(places_page, 0)
    assert len(get_cards(places_page)) == 0
    assert places_page.find_element(By.ID, "no-results").is_displayed()


def test_search_special_characters(places_page):
    search(places_page, "<script>%$#")
    wait_for_count(places_page, 0)


def test_search_only_spaces_shows_all(places_page):
    search(places_page, "     ")
    wait_for_count(places_page, 8)


def test_boundary_max_length_50(places_page):
    box = search(places_page, "a" * 60)
    assert len(box.get_attribute("value")) == 50


def test_not_existing_place_url(driver):
    driver.get(BASE_URL + "/places/999")
    assert "Place not found" in driver.page_source