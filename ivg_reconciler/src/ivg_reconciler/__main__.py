import sys


def _self_test():
    from datetime import date
    from ivg_reconciler.models import normalize_text
    from ivg_reconciler.matcher import _quarter_end
    assert normalize_text("San Daniele del Friuli") == "SAN DANIELE DEL FRIULI"
    assert _quarter_end(date(2026, 2, 1)) == date(2026, 3, 31)


if __name__ == "__main__":
    if "--self-test" in sys.argv:
        _self_test()
    else:
        from ivg_reconciler.gui import main
        main()
