FROM python:3.7

COPY ./build/install-venv.sh ./build/entrypoint.sh requirements app.py logging.conf settings.py /api/
COPY ./finances_explorer /api/finances_explorer

WORKDIR /api
RUN pip3 install virtualenv &&\
    mkdir /home/finances-explorer &&\
    groupadd -r finances-explorer &&\
    useradd --no-log-init -r -g finances-explorer finances-explorer &&\
    chown finances-explorer:finances-explorer -R /api /home/finances-explorer

USER finances-explorer
EXPOSE 8888/tcp
ENTRYPOINT ["/api/entrypoint.sh"]
