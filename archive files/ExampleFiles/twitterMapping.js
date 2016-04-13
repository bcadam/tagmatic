var body = {
        tweet: {
            properties: {
                coordinates: {
                    properties: {
                        coordinates: {
                            type: "geo_point"
                        },
                        type: {
                            type: "string"
                        }
                    }
                },
                created_at: {
                    type: "date",
                    format: "EE MMM d HH:mm:ss Z yyyy"
                },
                entities: {
                    properties: {
                        hashtags: {
                            properties: {
                                indices: {
                                    type: "long"
                                },
                                text: {
                                    type: "string"
                                }
                            }
                        },
                        media: {
                            properties: {
                                display_url: {
                                    type: "string"
                                },
                                expanded_url: {
                                    type: "string"
                                },
                                id: {
                                    type: "long"
                                },
                                id_str: {
                                    type: "string"
                                },
                                indices: {
                                    type: "long"
                                },
                                media_url: {
                                    type: "string"
                                },
                                media_url_https: {
                                    type: "string"
                                },
                                sizes: {
                                    properties: {
                                        large: {
                                            properties: {
                                                h: {
                                                    type: "long"
                                                },
                                                resize: {
                                                    type: "string"
                                                },
                                                w: {
                                                    type: "long"
                                                }
                                            }
                                        },
                                        medium: {
                                            properties: {
                                                h: {
                                                    type: "long"
                                                },
                                                resize: {
                                                    type: "string"
                                                },
                                                w: {
                                                    type: "long"
                                                }
                                            }
                                        },
                                        small: {
                                            properties: {
                                                h: {
                                                    type: "long"
                                                },
                                                resize: {
                                                    type: "string"
                                                },
                                                w: {
                                                    type: "long"
                                                }
                                            }
                                        },
                                        thumb: {
                                            properties: {
                                                h: {
                                                    type: "long"
                                                },
                                                resize: {
                                                    type: "string"
                                                },
                                                w: {
                                                    type: "long"
                                                }
                                            }
                                        }
                                    }
                                },
                                source_status_id: {
                                    type: "long"
                                },
                                source_status_id_str: {
                                    type: "string"
                                },
                                source_user_id: {
                                    type: "long"
                                },
                                source_user_id_str: {
                                    type: "string"
                                },
                                type: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        },
                        symbols: {
                            properties: {
                                indices: {
                                    type: "long"
                                },
                                text: {
                                    type: "string"
                                }
                            }
                        },
                        urls: {
                            properties: {
                                display_url: {
                                    type: "string"
                                },
                                expanded_url: {
                                    type: "string"
                                },
                                indices: {
                                    type: "long"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        },
                        user_mentions: {
                            properties: {
                                id: {
                                    type: "long"
                                },
                                id_str: {
                                    type: "string"
                                },
                                indices: {
                                    type: "long"
                                },
                                name: {
                                    type: "string"
                                },
                                screen_name: {
                                    type: "string"
                                }
                            }
                        }
                    }
                },
                favorite_count: {
                    type: "long"
                },
                favorited: {
                    type: "boolean"
                },
                geo: {
                    properties: {
                        coordinates: {
                            type: "double"
                        },
                        type: {
                            type: "string"
                        }
                    }
                },
                id: {
                    type: "long"
                },
                id_str: {
                    type: "string"
                },
                in_reply_to_screen_name: {
                    type: "string"
                },
                in_reply_to_status_id: {
                    type: "long"
                },
                in_reply_to_status_id_str: {
                    type: "string"
                },
                in_reply_to_user_id: {
                    type: "long"
                },
                in_reply_to_user_id_str: {
                    type: "string"
                },
                is_quote_status: {
                    type: "boolean"
                },
                lang: {
                    type: "string"
                },
                metadata: {
                    properties: {
                        iso_language_code: {
                            type: "string"
                        },
                        result_type: {
                            type: "string"
                        }
                    }
                },
                place: {
                    properties: {
                        attributes: {
                            type: "object"
                        },
                        bounding_box: {
                            properties: {
                                coordinates: {
                                    type: "double"
                                },
                                type: {
                                    type: "string"
                                }
                            }
                        },
                        country: {
                            type: "string"
                        },
                        country_code: {
                            type: "string"
                        },
                        full_name: {
                            type: "string"
                        },
                        id: {
                            type: "string"
                        },
                        name: {
                            type: "string"
                        },
                        place_type: {
                            type: "string"
                        },
                        url: {
                            type: "string"
                        }
                    }
                },
                possibly_sensitive: {
                    type: "boolean"
                },
                quoted_status: {
                    properties: {
                        coordinates: {
                            properties: {
                                coordinates: {
                                    type: "double"
                                },
                                type: {
                                    type: "string"
                                }
                            }
                        },
                        created_at: {
                            type: "string"
                        },
                        entities: {
                            properties: {
                                hashtags: {
                                    properties: {
                                        indices: {
                                            type: "long"
                                        },
                                        text: {
                                            type: "string"
                                        }
                                    }
                                },
                                media: {
                                    properties: {
                                        display_url: {
                                            type: "string"
                                        },
                                        expanded_url: {
                                            type: "string"
                                        },
                                        id: {
                                            type: "long"
                                        },
                                        id_str: {
                                            type: "string"
                                        },
                                        indices: {
                                            type: "long"
                                        },
                                        media_url: {
                                            type: "string"
                                        },
                                        media_url_https: {
                                            type: "string"
                                        },
                                        sizes: {
                                            properties: {
                                                large: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                },
                                                medium: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                },
                                                small: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                },
                                                thumb: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        source_status_id: {
                                            type: "long"
                                        },
                                        source_status_id_str: {
                                            type: "string"
                                        },
                                        source_user_id: {
                                            type: "long"
                                        },
                                        source_user_id_str: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        }
                                    }
                                },
                                symbols: {
                                    properties: {
                                        indices: {
                                            type: "long"
                                        },
                                        text: {
                                            type: "string"
                                        }
                                    }
                                },
                                urls: {
                                    properties: {
                                        display_url: {
                                            type: "string"
                                        },
                                        expanded_url: {
                                            type: "string"
                                        },
                                        indices: {
                                            type: "long"
                                        },
                                        url: {
                                            type: "string"
                                        }
                                    }
                                },
                                user_mentions: {
                                    properties: {
                                        id: {
                                            type: "long"
                                        },
                                        id_str: {
                                            type: "string"
                                        },
                                        indices: {
                                            type: "long"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        screen_name: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        },
                        favorite_count: {
                            type: "long"
                        },
                        favorited: {
                            type: "boolean"
                        },
                        geo: {
                            properties: {
                                coordinates: {
                                    type: "geo_point"
                                },
                                type: {
                                    type: "string"
                                }
                            }
                        },
                        id: {
                            type: "long"
                        },
                        id_str: {
                            type: "string"
                        },
                        in_reply_to_screen_name: {
                            type: "string"
                        },
                        in_reply_to_status_id: {
                            type: "long"
                        },
                        in_reply_to_status_id_str: {
                            type: "string"
                        },
                        in_reply_to_user_id: {
                            type: "long"
                        },
                        in_reply_to_user_id_str: {
                            type: "string"
                        },
                        is_quote_status: {
                            type: "boolean"
                        },
                        lang: {
                            type: "string"
                        },
                        metadata: {
                            properties: {
                                iso_language_code: {
                                    type: "string"
                                },
                                result_type: {
                                    type: "string"
                                }
                            }
                        },
                        place: {
                            properties: {
                                attributes: {
                                    type: "object"
                                },
                                bounding_box: {
                                    properties: {
                                        coordinates: {
                                            type: "double"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    }
                                },
                                country: {
                                    type: "string"
                                },
                                country_code: {
                                    type: "string"
                                },
                                full_name: {
                                    type: "string"
                                },
                                id: {
                                    type: "string"
                                },
                                name: {
                                    type: "string"
                                },
                                place_type: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        },
                        possibly_sensitive: {
                            type: "boolean"
                        },
                        quoted_status_id: {
                            type: "long"
                        },
                        quoted_status_id_str: {
                            type: "string"
                        },
                        retweet_count: {
                            type: "long"
                        },
                        retweeted: {
                            type: "boolean"
                        },
                        scopes: {
                            properties: {
                                followers: {
                                    type: "boolean"
                                },
                                place_ids: {
                                    type: "string"
                                }
                            }
                        },
                        source: {
                            type: "string"
                        },
                        text: {
                            type: "string"
                        },
                        truncated: {
                            type: "boolean"
                        },
                        user: {
                            properties: {
                                contributors_enabled: {
                                    type: "boolean"
                                },
                                created_at: {
                                    type: "string"
                                },
                                default_profile: {
                                    type: "boolean"
                                },
                                default_profile_image: {
                                    type: "boolean"
                                },
                                description: {
                                    type: "string"
                                },
                                entities: {
                                    properties: {
                                        description: {
                                            properties: {
                                                urls: {
                                                    properties: {
                                                        display_url: {
                                                            type: "string"
                                                        },
                                                        expanded_url: {
                                                            type: "string"
                                                        },
                                                        indices: {
                                                            type: "long"
                                                        },
                                                        url: {
                                                            type: "string"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        url: {
                                            properties: {
                                                urls: {
                                                    properties: {
                                                        display_url: {
                                                            type: "string"
                                                        },
                                                        expanded_url: {
                                                            type: "string"
                                                        },
                                                        indices: {
                                                            type: "long"
                                                        },
                                                        url: {
                                                            type: "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                favourites_count: {
                                    type: "long"
                                },
                                follow_request_sent: {
                                    type: "boolean"
                                },
                                followers_count: {
                                    type: "long"
                                },
                                following: {
                                    type: "boolean"
                                },
                                friends_count: {
                                    type: "long"
                                },
                                geo_enabled: {
                                    type: "boolean"
                                },
                                has_extended_profile: {
                                    type: "boolean"
                                },
                                id: {
                                    type: "long"
                                },
                                id_str: {
                                    type: "string"
                                },
                                is_translation_enabled: {
                                    type: "boolean"
                                },
                                is_translator: {
                                    type: "boolean"
                                },
                                lang: {
                                    type: "string"
                                },
                                listed_count: {
                                    type: "long"
                                },
                                location: {
                                    type: "string"
                                },
                                name: {
                                    type: "string"
                                },
                                notifications: {
                                    type: "boolean"
                                },
                                profile_background_color: {
                                    type: "string"
                                },
                                profile_background_image_url: {
                                    type: "string"
                                },
                                profile_background_image_url_https: {
                                    type: "string"
                                },
                                profile_background_tile: {
                                    type: "boolean"
                                },
                                profile_banner_url: {
                                    type: "string"
                                },
                                profile_image_url: {
                                    type: "string"
                                },
                                profile_image_url_https: {
                                    type: "string"
                                },
                                profile_link_color: {
                                    type: "string"
                                },
                                profile_sidebar_border_color: {
                                    type: "string"
                                },
                                profile_sidebar_fill_color: {
                                    type: "string"
                                },
                                profile_text_color: {
                                    type: "string"
                                },
                                profile_use_background_image: {
                                    type: "boolean"
                                },
                                protected: {
                                    type: "boolean"
                                },
                                screen_name: {
                                    type: "string"
                                },
                                statuses_count: {
                                    type: "long"
                                },
                                time_zone: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                },
                                utc_offset: {
                                    type: "long"
                                },
                                verified: {
                                    type: "boolean"
                                }
                            }
                        }
                    }
                },
                quoted_status_id: {
                    type: "long"
                },
                quoted_status_id_str: {
                    type: "string"
                },
                retweet_count: {
                    type: "long"
                },
                retweeted: {
                    type: "boolean"
                },
                retweeted_status: {
                    properties: {
                        coordinates: {
                            properties: {
                                coordinates: {
                                    type: "double"
                                },
                                type: {
                                    type: "string"
                                }
                            }
                        },
                        created_at: {
                            type: "string"
                        },
                        entities: {
                            properties: {
                                hashtags: {
                                    properties: {
                                        indices: {
                                            type: "long"
                                        },
                                        text: {
                                            type: "string"
                                        }
                                    }
                                },
                                media: {
                                    properties: {
                                        display_url: {
                                            type: "string"
                                        },
                                        expanded_url: {
                                            type: "string"
                                        },
                                        id: {
                                            type: "long"
                                        },
                                        id_str: {
                                            type: "string"
                                        },
                                        indices: {
                                            type: "long"
                                        },
                                        media_url: {
                                            type: "string"
                                        },
                                        media_url_https: {
                                            type: "string"
                                        },
                                        sizes: {
                                            properties: {
                                                large: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                },
                                                medium: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                },
                                                small: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                },
                                                thumb: {
                                                    properties: {
                                                        h: {
                                                            type: "long"
                                                        },
                                                        resize: {
                                                            type: "string"
                                                        },
                                                        w: {
                                                            type: "long"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        source_status_id: {
                                            type: "long"
                                        },
                                        source_status_id_str: {
                                            type: "string"
                                        },
                                        source_user_id: {
                                            type: "long"
                                        },
                                        source_user_id_str: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        }
                                    }
                                },
                                symbols: {
                                    properties: {
                                        indices: {
                                            type: "long"
                                        },
                                        text: {
                                            type: "string"
                                        }
                                    }
                                },
                                urls: {
                                    properties: {
                                        display_url: {
                                            type: "string"
                                        },
                                        expanded_url: {
                                            type: "string"
                                        },
                                        indices: {
                                            type: "long"
                                        },
                                        url: {
                                            type: "string"
                                        }
                                    }
                                },
                                user_mentions: {
                                    properties: {
                                        id: {
                                            type: "long"
                                        },
                                        id_str: {
                                            type: "string"
                                        },
                                        indices: {
                                            type: "long"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        screen_name: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        },
                        favorite_count: {
                            type: "long"
                        },
                        favorited: {
                            type: "boolean"
                        },
                        geo: {
                            properties: {
                                coordinates: {
                                    type: "double"
                                },
                                type: {
                                    type: "string"
                                }
                            }
                        },
                        id: {
                            type: "long"
                        },
                        id_str: {
                            type: "string"
                        },
                        in_reply_to_screen_name: {
                            type: "string"
                        },
                        in_reply_to_status_id: {
                            type: "long"
                        },
                        in_reply_to_status_id_str: {
                            type: "string"
                        },
                        in_reply_to_user_id: {
                            type: "long"
                        },
                        in_reply_to_user_id_str: {
                            type: "string"
                        },
                        is_quote_status: {
                            type: "boolean"
                        },
                        lang: {
                            type: "string"
                        },
                        metadata: {
                            properties: {
                                iso_language_code: {
                                    type: "string"
                                },
                                result_type: {
                                    type: "string"
                                }
                            }
                        },
                        place: {
                            properties: {
                                attributes: {
                                    type: "object"
                                },
                                bounding_box: {
                                    properties: {
                                        coordinates: {
                                            type: "double"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    }
                                },
                                country: {
                                    type: "string"
                                },
                                country_code: {
                                    type: "string"
                                },
                                full_name: {
                                    type: "string"
                                },
                                id: {
                                    type: "string"
                                },
                                name: {
                                    type: "string"
                                },
                                place_type: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        },
                        possibly_sensitive: {
                            type: "boolean"
                        },
                        quoted_status: {
                            properties: {
                                coordinates: {
                                    properties: {
                                        coordinates: {
                                            type: "double"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    }
                                },
                                created_at: {
                                    type: "string"
                                },
                                entities: {
                                    properties: {
                                        hashtags: {
                                            properties: {
                                                indices: {
                                                    type: "long"
                                                },
                                                text: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        media: {
                                            properties: {
                                                display_url: {
                                                    type: "string"
                                                },
                                                expanded_url: {
                                                    type: "string"
                                                },
                                                id: {
                                                    type: "long"
                                                },
                                                id_str: {
                                                    type: "string"
                                                },
                                                indices: {
                                                    type: "long"
                                                },
                                                media_url: {
                                                    type: "string"
                                                },
                                                media_url_https: {
                                                    type: "string"
                                                },
                                                sizes: {
                                                    properties: {
                                                        large: {
                                                            properties: {
                                                                h: {
                                                                    type: "long"
                                                                },
                                                                resize: {
                                                                    type: "string"
                                                                },
                                                                w: {
                                                                    type: "long"
                                                                }
                                                            }
                                                        },
                                                        medium: {
                                                            properties: {
                                                                h: {
                                                                    type: "long"
                                                                },
                                                                resize: {
                                                                    type: "string"
                                                                },
                                                                w: {
                                                                    type: "long"
                                                                }
                                                            }
                                                        },
                                                        small: {
                                                            properties: {
                                                                h: {
                                                                    type: "long"
                                                                },
                                                                resize: {
                                                                    type: "string"
                                                                },
                                                                w: {
                                                                    type: "long"
                                                                }
                                                            }
                                                        },
                                                        thumb: {
                                                            properties: {
                                                                h: {
                                                                    type: "long"
                                                                },
                                                                resize: {
                                                                    type: "string"
                                                                },
                                                                w: {
                                                                    type: "long"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                source_status_id: {
                                                    type: "long"
                                                },
                                                source_status_id_str: {
                                                    type: "string"
                                                },
                                                source_user_id: {
                                                    type: "long"
                                                },
                                                source_user_id_str: {
                                                    type: "string"
                                                },
                                                type: {
                                                    type: "string"
                                                },
                                                url: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        symbols: {
                                            properties: {
                                                indices: {
                                                    type: "long"
                                                },
                                                text: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        urls: {
                                            properties: {
                                                display_url: {
                                                    type: "string"
                                                },
                                                expanded_url: {
                                                    type: "string"
                                                },
                                                indices: {
                                                    type: "long"
                                                },
                                                url: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        user_mentions: {
                                            properties: {
                                                id: {
                                                    type: "long"
                                                },
                                                id_str: {
                                                    type: "string"
                                                },
                                                indices: {
                                                    type: "long"
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                screen_name: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                },
                                favorite_count: {
                                    type: "long"
                                },
                                favorited: {
                                    type: "boolean"
                                },
                                geo: {
                                    properties: {
                                        coordinates: {
                                            type: "double"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    }
                                },
                                id: {
                                    type: "long"
                                },
                                id_str: {
                                    type: "string"
                                },
                                in_reply_to_screen_name: {
                                    type: "string"
                                },
                                in_reply_to_status_id: {
                                    type: "long"
                                },
                                in_reply_to_status_id_str: {
                                    type: "string"
                                },
                                in_reply_to_user_id: {
                                    type: "long"
                                },
                                in_reply_to_user_id_str: {
                                    type: "string"
                                },
                                is_quote_status: {
                                    type: "boolean"
                                },
                                lang: {
                                    type: "string"
                                },
                                metadata: {
                                    properties: {
                                        iso_language_code: {
                                            type: "string"
                                        },
                                        result_type: {
                                            type: "string"
                                        }
                                    }
                                },
                                place: {
                                    properties: {
                                        attributes: {
                                            type: "object"
                                        },
                                        bounding_box: {
                                            properties: {
                                                coordinates: {
                                                    type: "double"
                                                },
                                                type: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        country: {
                                            type: "string"
                                        },
                                        country_code: {
                                            type: "string"
                                        },
                                        full_name: {
                                            type: "string"
                                        },
                                        id: {
                                            type: "string"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        place_type: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        }
                                    }
                                },
                                possibly_sensitive: {
                                    type: "boolean"
                                },
                                quoted_status_id: {
                                    type: "long"
                                },
                                quoted_status_id_str: {
                                    type: "string"
                                },
                                retweet_count: {
                                    type: "long"
                                },
                                retweeted: {
                                    type: "boolean"
                                },
                                scopes: {
                                    properties: {
                                        followers: {
                                            type: "boolean"
                                        }
                                    }
                                },
                                source: {
                                    type: "string"
                                },
                                text: {
                                    type: "string"
                                },
                                truncated: {
                                    type: "boolean"
                                },
                                user: {
                                    properties: {
                                        contributors_enabled: {
                                            type: "boolean"
                                        },
                                        created_at: {
                                            type: "string"
                                        },
                                        default_profile: {
                                            type: "boolean"
                                        },
                                        default_profile_image: {
                                            type: "boolean"
                                        },
                                        description: {
                                            type: "string"
                                        },
                                        entities: {
                                            properties: {
                                                description: {
                                                    properties: {
                                                        urls: {
                                                            properties: {
                                                                display_url: {
                                                                    type: "string"
                                                                },
                                                                expanded_url: {
                                                                    type: "string"
                                                                },
                                                                indices: {
                                                                    type: "long"
                                                                },
                                                                url: {
                                                                    type: "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                url: {
                                                    properties: {
                                                        urls: {
                                                            properties: {
                                                                display_url: {
                                                                    type: "string"
                                                                },
                                                                expanded_url: {
                                                                    type: "string"
                                                                },
                                                                indices: {
                                                                    type: "long"
                                                                },
                                                                url: {
                                                                    type: "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        favourites_count: {
                                            type: "long"
                                        },
                                        follow_request_sent: {
                                            type: "boolean"
                                        },
                                        followers_count: {
                                            type: "long"
                                        },
                                        following: {
                                            type: "boolean"
                                        },
                                        friends_count: {
                                            type: "long"
                                        },
                                        geo_enabled: {
                                            type: "boolean"
                                        },
                                        has_extended_profile: {
                                            type: "boolean"
                                        },
                                        id: {
                                            type: "long"
                                        },
                                        id_str: {
                                            type: "string"
                                        },
                                        is_translation_enabled: {
                                            type: "boolean"
                                        },
                                        is_translator: {
                                            type: "boolean"
                                        },
                                        lang: {
                                            type: "string"
                                        },
                                        listed_count: {
                                            type: "long"
                                        },
                                        location: {
                                            type: "string"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        notifications: {
                                            type: "boolean"
                                        },
                                        profile_background_color: {
                                            type: "string"
                                        },
                                        profile_background_image_url: {
                                            type: "string"
                                        },
                                        profile_background_image_url_https: {
                                            type: "string"
                                        },
                                        profile_background_tile: {
                                            type: "boolean"
                                        },
                                        profile_banner_url: {
                                            type: "string"
                                        },
                                        profile_image_url: {
                                            type: "string"
                                        },
                                        profile_image_url_https: {
                                            type: "string"
                                        },
                                        profile_link_color: {
                                            type: "string"
                                        },
                                        profile_sidebar_border_color: {
                                            type: "string"
                                        },
                                        profile_sidebar_fill_color: {
                                            type: "string"
                                        },
                                        profile_text_color: {
                                            type: "string"
                                        },
                                        profile_use_background_image: {
                                            type: "boolean"
                                        },
                                        protected: {
                                            type: "boolean"
                                        },
                                        screen_name: {
                                            type: "string"
                                        },
                                        statuses_count: {
                                            type: "long"
                                        },
                                        time_zone: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        },
                                        utc_offset: {
                                            type: "long"
                                        },
                                        verified: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            }
                        },
                        quoted_status_id: {
                            type: "long"
                        },
                        quoted_status_id_str: {
                            type: "string"
                        },
                        retweet_count: {
                            type: "long"
                        },
                        retweeted: {
                            type: "boolean"
                        },
                        scopes: {
                            properties: {
                                place_ids: {
                                    type: "string"
                                }
                            }
                        },
                        source: {
                            type: "string"
                        },
                        text: {
                            type: "string"
                        },
                        truncated: {
                            type: "boolean"
                        },
                        user: {
                            properties: {
                                contributors_enabled: {
                                    type: "boolean"
                                },
                                created_at: {
                                    type: "string"
                                },
                                default_profile: {
                                    type: "boolean"
                                },
                                default_profile_image: {
                                    type: "boolean"
                                },
                                description: {
                                    type: "string"
                                },
                                entities: {
                                    properties: {
                                        description: {
                                            properties: {
                                                urls: {
                                                    properties: {
                                                        display_url: {
                                                            type: "string"
                                                        },
                                                        expanded_url: {
                                                            type: "string"
                                                        },
                                                        indices: {
                                                            type: "long"
                                                        },
                                                        url: {
                                                            type: "string"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        url: {
                                            properties: {
                                                urls: {
                                                    properties: {
                                                        display_url: {
                                                            type: "string"
                                                        },
                                                        expanded_url: {
                                                            type: "string"
                                                        },
                                                        indices: {
                                                            type: "long"
                                                        },
                                                        url: {
                                                            type: "string"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                favourites_count: {
                                    type: "long"
                                },
                                follow_request_sent: {
                                    type: "boolean"
                                },
                                followers_count: {
                                    type: "long"
                                },
                                following: {
                                    type: "boolean"
                                },
                                friends_count: {
                                    type: "long"
                                },
                                geo_enabled: {
                                    type: "boolean"
                                },
                                has_extended_profile: {
                                    type: "boolean"
                                },
                                id: {
                                    type: "long"
                                },
                                id_str: {
                                    type: "string"
                                },
                                is_translation_enabled: {
                                    type: "boolean"
                                },
                                is_translator: {
                                    type: "boolean"
                                },
                                lang: {
                                    type: "string"
                                },
                                listed_count: {
                                    type: "long"
                                },
                                location: {
                                    type: "string"
                                },
                                name: {
                                    type: "string"
                                },
                                notifications: {
                                    type: "boolean"
                                },
                                profile_background_color: {
                                    type: "string"
                                },
                                profile_background_image_url: {
                                    type: "string"
                                },
                                profile_background_image_url_https: {
                                    type: "string"
                                },
                                profile_background_tile: {
                                    type: "boolean"
                                },
                                profile_banner_url: {
                                    type: "string"
                                },
                                profile_image_url: {
                                    type: "string"
                                },
                                profile_image_url_https: {
                                    type: "string"
                                },
                                profile_link_color: {
                                    type: "string"
                                },
                                profile_sidebar_border_color: {
                                    type: "string"
                                },
                                profile_sidebar_fill_color: {
                                    type: "string"
                                },
                                profile_text_color: {
                                    type: "string"
                                },
                                profile_use_background_image: {
                                    type: "boolean"
                                },
                                protected: {
                                    type: "boolean"
                                },
                                screen_name: {
                                    type: "string"
                                },
                                statuses_count: {
                                    type: "long"
                                },
                                time_zone: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                },
                                utc_offset: {
                                    type: "long"
                                },
                                verified: {
                                    type: "boolean"
                                },
                                withheld_in_countries: {
                                    type: "string"
                                }
                            }
                        },
                        withheld_in_countries: {
                            type: "string"
                        }
                    }
                },
                scopes: {
                    properties: {
                        place_ids: {
                            type: "string"
                        }
                    }
                },
                source: {
                    type: "string"
                },
                text: {
                    type: "string"
                },
                truncated: {
                    type: "boolean"
                },
                user: {
                    properties: {
                        contributors_enabled: {
                            type: "boolean"
                        },
                        created_at: {
                            type: "string"
                        },
                        default_profile: {
                            type: "boolean"
                        },
                        default_profile_image: {
                            type: "boolean"
                        },
                        description: {
                            type: "string"
                        },
                        entities: {
                            properties: {
                                description: {
                                    properties: {
                                        urls: {
                                            properties: {
                                                display_url: {
                                                    type: "string"
                                                },
                                                expanded_url: {
                                                    type: "string"
                                                },
                                                indices: {
                                                    type: "long"
                                                },
                                                url: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                },
                                url: {
                                    properties: {
                                        urls: {
                                            properties: {
                                                display_url: {
                                                    type: "string"
                                                },
                                                expanded_url: {
                                                    type: "string"
                                                },
                                                indices: {
                                                    type: "long"
                                                },
                                                url: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        favourites_count: {
                            type: "long"
                        },
                        follow_request_sent: {
                            type: "boolean"
                        },
                        followers_count: {
                            type: "long"
                        },
                        following: {
                            type: "boolean"
                        },
                        friends_count: {
                            type: "long"
                        },
                        geo_enabled: {
                            type: "boolean"
                        },
                        has_extended_profile: {
                            type: "boolean"
                        },
                        id: {
                            type: "long"
                        },
                        id_str: {
                            type: "string"
                        },
                        is_translation_enabled: {
                            type: "boolean"
                        },
                        is_translator: {
                            type: "boolean"
                        },
                        lang: {
                            type: "string"
                        },
                        listed_count: {
                            type: "long"
                        },
                        location: {
                            type: "string"
                        },
                        name: {
                            type: "string"
                        },
                        notifications: {
                            type: "boolean"
                        },
                        profile_background_color: {
                            type: "string"
                        },
                        profile_background_image_url: {
                            type: "string"
                        },
                        profile_background_image_url_https: {
                            type: "string"
                        },
                        profile_background_tile: {
                            type: "boolean"
                        },
                        profile_banner_url: {
                            type: "string"
                        },
                        profile_image_url: {
                            type: "string"
                        },
                        profile_image_url_https: {
                            type: "string"
                        },
                        profile_link_color: {
                            type: "string"
                        },
                        profile_sidebar_border_color: {
                            type: "string"
                        },
                        profile_sidebar_fill_color: {
                            type: "string"
                        },
                        profile_text_color: {
                            type: "string"
                        },
                        profile_use_background_image: {
                            type: "boolean"
                        },
                        protected: {
                            type: "boolean"
                        },
                        screen_name: {
                            type: "string"
                        },
                        statuses_count: {
                            type: "long"
                        },
                        time_zone: {
                            type: "string"
                        },
                        url: {
                            type: "string"
                        },
                        utc_offset: {
                            type: "long"
                        },
                        verified: {
                            type: "boolean"
                        },
                        withheld_in_countries: {
                            type: "string"
                        }
                    }
                },
                withheld_in_countries: {
                    type: "string"
                }
            }
        }
    };