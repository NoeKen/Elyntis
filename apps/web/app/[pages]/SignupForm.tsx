// components/SignupForm.tsx
import { useState } from 'react';

const roles = [
  { id: 'participant', label: 'Participant' },
  { id: 'organizer',   label: 'Organisateur' },
  { id: 'provider',    label: 'Prestataire' },
  { id: 'owner',       label: 'Propriétaire de lieu' },
];

export default function SignupForm() {
  const [selectedRole, setSelectedRole] = useState('participant');

  return (
    <form className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-8 shadow">
      <h2 className="text-2xl font-semibold text-gray-800">Créer un compte</h2>

      {/* Nom */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          E‑mail
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Mot de passe */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Sélection du rôle */}
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-gray-700">
          Choisissez votre profil
        </legend>

        <div className="grid gap-2 sm:grid-cols-2">
          {roles.map((role) => (
            <label
              key={role.id}
              className={`flex cursor-pointer items-center rounded-md border p-3 text-sm ${
                selectedRole === role.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="role"
                value={role.id}
                checked={selectedRole === role.id}
                onChange={() => setSelectedRole(role.id)}
                className="mr-2 h-4 w-4 accent-indigo-600"
              />
              {role.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Bouton */}
      <button
        type="submit"
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        S’inscrire
      </button>
    </form>
  );
}
