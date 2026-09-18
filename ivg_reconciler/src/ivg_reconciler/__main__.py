import sys


def _self_test():
    from .core import normalize_text, _quarter_end
    from datetime import date
    assert normalize_text("San Daniele del Friuli") == "SAN DANIELE DEL FRIULI"
    assert _quarter_end(date(2026, 2, 1)) == date(2026, 3, 31)
    print("SELFTEST_OK")


if __name__ == "__main__":
    if "--self-test" in sys.argv:
        _self_test()
    else:
        from .gui import main
        main()
