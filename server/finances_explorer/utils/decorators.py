from functools import wraps

from finances_explorer.mysql.mysql_connector import get_mysql


def dao_factory(cls):
    return cls(get_mysql())


def inject_dao(func):
    annotations = func.__annotations__
    annotations.pop("return", None)

    @wraps(func)
    def wrapper(*args, **kwargs):
        daos = {kw: dao_factory(cls) for kw, cls in annotations.items()}
        daos = {k: v for k, v in daos.items() if v}
        return func(*args, **{**daos, **kwargs})

    return wrapper
