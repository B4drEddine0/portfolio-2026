# Language Switcher Implementation

## 1. Import translations at the top of main.ts:
```typescript
import { translations, currentLang, setLanguage, getLanguage, t } from './translations'
```

## 2. Initialize language on app start (in init function):
```typescript
currentLang = getLanguage()
```

## 3. Add language switcher button in sidebar (after social links):
```html
<button class="lang-switcher" id="langSwitcher">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
  <span>${currentLang === 'en' ? 'FR' : 'EN'}</span>
</button>
```

## 4. Add CSS for language switcher in style.css:
```css
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.lang-switcher:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fbbf24;
  transform: translateY(-2px);
}

.lang-switcher svg {
  width: 20px;
  height: 20px;
}
```

## 5. Add event listener for language switcher (in init function):
```typescript
document.getElementById('langSwitcher')?.addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'fr' : 'en'
  setLanguage(newLang)
  currentLang = newLang
  location.reload() // Reload to apply translations
})
```

## 6. Replace hardcoded strings with t() function:
- profile.title: use t('title')
- 'Disponible pour projets': use t('availableForProjects')
- 'Télécharger CV': use t('downloadCV')
- Tab names: t('about'), t('resume'), t('skills'), t('portfolio'), t('contact')
- Form labels and placeholders
- Toast messages

This creates a minimal language switcher that persists the user's choice.
