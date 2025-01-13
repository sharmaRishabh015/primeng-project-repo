import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  preset = signal({ primitive: null, semantic: null });

    acTokens = signal([]);

    setPreset(preset:any) {
        this.preset.set(preset);
    }

    setAcTokens(token:any) {
        this.acTokens.set(token);
}
}
