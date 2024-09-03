---
title: Nimble
slug: /
---

## Nimble Exporter

[Nimble Exporter](https://github.com/deckhouse/nimble_exporter) предоставляет ряд метрик из [Nimble](https://www.nimble.com/) системе мониторинга [Prometheus](https://prometheus.io/), которые затем могут быть визуализированы в [Grafana](https://grafana.com/).
Используется с помощью Docker-контейнер

## Как использовать

```bash
- name: srt-exporter
    image: {{ $.Values.werf.image.exporter }}
    command:
    - /nimble_exporter
    - -auth_salt=590
    - -auth_hash=xxxx
    ports:
    - containerPort: 9017
        name: exporter
        protocol: TCP
    resources:
        {{ toYaml $.Values.resources.exporter | nindent 10 }}
```

* Запустите экспортер на сервере. Он начнет собирать метрики с CRM и предоставлять их в формате, совместимом с Prometheus.
* Проверьте доступность метрик через URL-адрес, предоставляемый экспортером (например, `http://localhost:9100/metrics`).

### Интеграция с Prometheus

* В конфигурации Prometheus (файл `prometheus.yml`) добавьте новую секцию для вашего экспортера. Укажите его адрес и порт, на котором он работает, чтобы Prometheus мог запрашивать метрики:
    ```bash
    scrape_configs:
    - job_name: 'crm-exporter'
        static_configs:
        - targets: ['localhost:9100']
    ```      
* Prometheus самостоятельно запрашивает метрики у указанного экспортера с заданной периодичностью.
