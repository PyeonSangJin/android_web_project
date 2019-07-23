package com.example.platform.model;

import android.graphics.drawable.Drawable;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Skeleton_titlebar implements Serializable {
    private String background;
    private List<Menu_info> menu_info;

    public void add_menu_info(String icon_url, String title, String web_url) {
        menu_info.add(new Menu_info(icon_url, title, web_url));
    }

    public String getBackground() {
        return background;
    }

    public List<Menu_info> getMenu_info() {
        return menu_info;
    }


    public Skeleton_titlebar(String background) {
        this.background = background;
        menu_info = new ArrayList<>();
    }

    public class Menu_info  implements Serializable{
        private String icon_url;
        private String title;
        private String web_url;

        private Menu_info(String icon_url, String title, String web_url) {
            this.icon_url = icon_url;
            this.title = title;
            this.web_url = web_url;
        }

        public String getIcon_url() {
            return icon_url;
        }

        public String getTitle() {
            return title;
        }

        public String getWeb_url() {
            return web_url;
        }
    }

}
