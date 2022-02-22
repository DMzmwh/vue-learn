import useStorage from '@/hooks/useStorage';
import { defineStore } from 'pinia';

interface SiteConfig {
  user_id: number;
  suffix: string;
  theme: string;
  icon_url: string;
  site_name: string;
  other_background_image: string;
  site_desc: string;
  site_back_animation: string;
  background_image: string;
  background_color: string;
  pure_background: boolean;
  background_music: string;
  box_link_align: string;
  site_name_color: string;
  box_background_color: string;
  box_title_color: string;
  box_link_color: string;
  box_link_hover_color: string;
  box_back_hover_color: string;
  bg_mask_color: string;
  site_notice: string;
}

const useSiteSettings = defineStore({
  id: 'site-setting',
  state: (): Partial<SiteConfig> => ({}),
});

const instance = useSiteSettings();

instance.$subscribe((_, state) => {
  const { setItem } = useStorage();
  setItem(instance.$id, { ...state });
});

export default useSiteSettings;
